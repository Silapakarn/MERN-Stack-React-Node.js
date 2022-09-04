import {useState} from 'react'
import Header from '../pages/home/Header.jsx'
import Navbar from "../pages/home/Navbar.jsx"
import {useLocation} from 'react-router-dom'
import './list.css'
import { format } from 'date-fns/esm'
import { DateRange } from "react-date-range";
import SearchItem from '../pages/home/searchItem/SearchItem.jsx'
import useFetch from '../../../client/src/hook/useFetch.js'


export default function List() {


  const location = useLocation()
  console.log(location)

  const [destination, setDestination] = useState(location.state.destination)
  const [dates, setDates] = useState(location.state.dates)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)

  //-----Get data from api
  const {data,loading,error,reFetch} = useFetch(`http://localhost:8800/api/hotels?city=berlin&min=${min || 0}&max=${max || 999}`)
  console.log(data)

  //------handleClick
  const handleClick = () => {
    reFetch()
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
              <h1 className="lsTitle">Search</h1>
              <div className='lsItem'>
                <label>Description</label>
                <input type="text" placeholder={destination}/>
              </div>
              <div className='lsItem'>
                <label>Check-in Date</label>
                <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange 
                onChange={(item) => setDates(item.selection)} 
                minDate={new Date()}
                ranges={dates}/>
              )}
              </div>
              <div className="lsItem">
                <label>Options</label>
                <div className="lsOptions">

                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                      Min price <small>per night</small>
                  </span>
                  <input type="number" onChange={e=>setMin(e.target.value)} className='lsOptionInput' />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                      Max price <small>per night</small>
                  </span>
                  <input type="number" onChange={e=>setMax(e.target.value)} className='lsOptionInput' />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                    Adult
                  </span>
                  <input type="number" min={1}className='lsOptionInput' placeholder={options.adult} />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                     Children
                  </span>
                  <input type="number" min={0}className='lsOptionInput' placeholder={options.children} />
                </div>
                <div className='lsOptionItem'>
                  <span className='lsOptionText'>
                      Room
                  </span>
                  <input type="number" min={1}className='lsOptionInput'
                   placeholder={options.room} />
                </div>
                </div>
              </div>

              <button onClick={handleClick}>Search</button>

          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}



