// functional component

type MsgProps = {
  msg: string;
};
export function Message(props: MsgProps) {
  return (
    <>
      <h1> {props.msg}</h1>
    </>
  );
}
