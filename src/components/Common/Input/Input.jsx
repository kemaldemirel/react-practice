import classes from './input.module.css'

export const Input = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={className ? classes.input + ' ' + className : classes.input}
    />
  )
}
