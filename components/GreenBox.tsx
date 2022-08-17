type GreenBoxProps = {
  height: string
  width: string
}

const GreenBox = (props: GreenBoxProps) => {
  return (
    <div
      style={{
        backgroundColor: 'green',
        height: props.height,
        width: props.width,
      }}
    />
  )
}

export default GreenBox
