---
title: 'Pytorch Advanced Part-1 DataParallel'
date: '2023-07'
name: Rahul Chand
---


### DataParallel

1. Only one processes but multi threaded
2. In the forward pass, module is replicated on each device. During the backwards pass, gradients from each replica are summed into the original module.
3. The module is "replicated" & then "destroyed" so a variable like `self.count` which is incremented each iteration will remain 0. If you want such a variable to change state define a mutable object like `List` or `Tensor`

#### Specifics
1. You have to put your model onto the **first** gpu id you mention in `device_ids`
> Below example won't work since model was placed on cuda:1 but first device id specified in DataParallel was 0


```python
model = Net()
model = model.to("cuda:1")

net = torch.nn.DataParallel(model, device_ids=[0,1,2], output_device=1)
```

> But this example will work

```python

model = Net()
model = model.to("cuda:2")

net = torch.nn.DataParallel(model, device_ids=[2,0,1], output_device=1)

```


2. The output will be of shape `(full_batch, ...)` if not a scalar. And a 1D tensor of shape `num_gpus` if scalar (e.g. if we directly return a loss)


#### How does .forward(...) work?

1. The base model (on the first gpu) is replicated and input is `scattered` and `parallel_apply` is called
2. Forward is not that interesting

#### How does .backward(...) work?

1. Lets say the output is a loss scalar
```python
# Lets say we have 4 GPUS
net = torch.nn.DataParallel(model, ......)
out = net(input)
#print(out.shape) -> will print (4,) and tensor will be on device 0
out = torch.mean(out) #We have to make it a scalar value before calling .backward() on it
```
2. When we  call `out.backward()` even though it was on `cuda:0` it gets split again across devices and gradient is calculated w.r.t to each replica and then averaged and stored in the `cuda:0` instance



##### Tricky details
1. After each forward pass, only the values/tensors relevant to backward computation are stored. In below example `self.counter` variable state not be updated

```python
class MyModule(nn.Module):

	def __init__(self):

		super(MyModule, self).__init__()
		self.counter = 0
		self.counter.requires_grad = False
  
	def forward(self, x):

		self.counter += 1
		return x

```


2. DP is slower than DPP for one node multi GPU case because of GIL thread(?) and input scattering and output gathering. 