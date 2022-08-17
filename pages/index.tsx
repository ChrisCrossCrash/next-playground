import { ComponentType, ElementType } from 'react'
import type { NextPage } from 'next'

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

type DynamicComponent = {
  componentType: string
  componentProps?: { [key: string]: any }
}

const dynamicComponents: DynamicComponent[] = [
  {
    componentType: 'GreenBox',
    componentProps: {
      height: '100px',
      width: '100px',
    },
  },
  {
    componentType: 'RedCircle',
    componentProps: {
      radius: '50px',
    },
  },
]

const ComponentTypes: Record<string, ComponentType<any>> = {
  GreenBox,
  RedCircle,
} as const

type DynamicComponentProps = {
  componentType: keyof typeof ComponentTypes
  componentProps: any
}

const DynamicComponent = ({
  componentType,
  componentProps,
}: DynamicComponentProps) => {
  const Component = ComponentTypes[componentType]
  return <Component {...componentProps} />
}

const Home: NextPage = () => {
  return (
    <div className='centered'>
      {dynamicComponents.map(({ componentType, componentProps }, index) => (
        <DynamicComponent
          key={index}
          componentType={componentType}
          componentProps={componentProps}
        />
      ))}
    </div>
  )
}

export default Home
