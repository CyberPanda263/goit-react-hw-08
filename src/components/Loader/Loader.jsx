import { Rings } from "react-loader-spinner"
import css from './Loader.module.css'

const Loader = () => {
    return (
        <div className={css.loderBox}>
        <Rings
            visible={true}
            height="200"
            width="200"
            color="#4fa94d"
            ariaLabel="rings-loading"
            wrapperStyle={{}}
            wrapperClass=""
  />
       </div>
    )
}

export default Loader