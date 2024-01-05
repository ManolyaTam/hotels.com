import Button from "../../components/Button";

const Confirmation = () => {
  return (
    <>
      <Button
        label="Print"
        onClick={() => {
          window.print();
        }}
      />
    </>
  );
};

export default Confirmation;
