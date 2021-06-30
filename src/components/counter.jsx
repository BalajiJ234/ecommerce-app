import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";

const Counter = (props) => {
  return (
    <div>
      <IconButton
        onClick={() => props.handleDecrement(props.product.id)}
        aria-label='decrement'>
        <RemoveIcon />
      </IconButton>
      {props.product.quantity}
      <IconButton
        onClick={() => props.handleIncrement(props.product.id)}
        aria-label='increment'>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default Counter;
