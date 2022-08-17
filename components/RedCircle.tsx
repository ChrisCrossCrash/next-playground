type RedCircleProps = {
  radius: string
}

const RedCircle = (props: RedCircleProps) => {
  return (
    <div
      style={{
        backgroundColor: 'red',
        borderRadius: '50%',
        height: `calc(${props.radius} * 2)`,
        width: `calc(${props.radius} * 2)`,
      }}
    />
  )
}

export default RedCircle
