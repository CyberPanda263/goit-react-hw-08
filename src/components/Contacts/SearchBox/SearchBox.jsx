import css from './SearchBox.module.css';
import { useDispatch } from 'react-redux';
import {changeFilter} from '../../../redux/filter/slice';



const SearchBox = () => {

    const dispath = useDispatch();

    return(
        <div className= {css.searchBox}>
            <p>Find contacts by name</p>
            <input className= {css.searchBoxInput} 
            type='text' 
            onChange={(evet) => dispath(changeFilter(evet.target.value))} />
        </div>
    )
}

export default SearchBox