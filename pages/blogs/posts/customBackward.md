---
title: 'Writing Custom backward in PyTorch'
date: '2023-08'
name: Rahul Chand
---

1. Custom backward : Two ways to write custom backward in PyTorch. 

### 1. Define a nn.Module with a backward and forward function in a class and use the *.backward()*

```python
import torch
class MyCustomFunction(torch.autograd.Function):
    @staticmethod
    def forward(ctx, input):
        # Perform forward computation
        ctx.save_for_backward(input)
        output = input * 2
        return output

    @staticmethod
    def backward(ctx, grad_output):
        # Perform backward computation
        input, = ctx.saved_tensors
        grad_input = grad_output * 2
        return grad_input
```

- We use @staticmethod because no instantiation is required. 
- ctx is used to save all values that will be used in backward. These will be saved as part of the computation graph

### 2. Define a class with a normal forward & a backward where you manually set the gradients

```python

class MyCustomFunction(nn.Module):
	def __init__(self):
		self.weight = nn.Linear(4,5)

	def forward(self, x):
		return self.weight(x)
	
	def backward(self, input):
		self.weight.grad = input
		return grad_out
		
```

- In this case we will call this class inside a `torch.no_grad()` and whatever gradient is returned from it will be used to call the natural `.backward(grad_out)`