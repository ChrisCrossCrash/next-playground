import { ComponentType, ElementType } from 'react'
import type { NextPage } from 'next'
import GreenBox from '../components/GreenBox'
import RedCircle from '../components/RedCircle'

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
