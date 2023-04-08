import styles from '@/styles/Home.module.css'
export default function Header(props) {
    return (
        <div className='flex flex-row'>
            <div className='align-middle'>
                <img src={props.src} 
                alt={props.alt}
                width={80}
                height={80}
                />
            </div>
            <div className='ml-5'>
                <p>{props.desc}</p>
            </div>
        </div>
    )
  }