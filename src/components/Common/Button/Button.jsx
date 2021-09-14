import classes from './button.module.css'

export const Button = ({ className, ...props }) => (
  <button
    {...props}
    className={className ? classes.button + ' ' + className : classes.button}
  />
)
