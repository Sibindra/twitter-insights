import { Dna } from "react-loader-spinner"

export default function GraphLoader() {
  return (
    <div className=" w-full h-40 flex items-center justify-center">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
  )
}
