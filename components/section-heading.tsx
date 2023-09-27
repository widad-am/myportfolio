import { type } from 'os'
type sectioHeadingProps={
    children:React.ReactNode;
}
export default function SectionHeading ({children}:sectioHeadingProps) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center'>{children}</h2>
  )
}
