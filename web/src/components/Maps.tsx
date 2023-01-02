import Iframe from "react-iframe";

interface MapsProps {
  url: string
  width?: string
  height?: string
  id: string
}

export function Maps(props: MapsProps) {
  return (
    <Iframe
      id={props.id}
      url={props.url}
      width={props.width}
      height={props.height}
    />
  )
}