import { useDispatch, useSelector } from 'react-redux'
import style from './activities.module.css'
import { NavLink } from 'react-router-dom'

//Actions
import { deleteCountryFromActivity } from '../../Redux/Actions/actions'

export default function Activities() {

    const dispatch = useDispatch()

    const allActivities = useSelector(state => state?.activities)

    function deleteCountryHandler(ids){
        dispatch(deleteCountryFromActivity(ids))
    }

    return (
        <div className={style.container}>
            <div className={style.activitiesContainer}>
                {allActivities?.map((activity, index) =>
                    <div className={style.activity} key={activity.name}>
                        <div className={style.activityNameContainer}>
                            <p key={activity.name}>{activity.name}</p>
                        </div>
                        <p key={activity.difficulty}>Difficulty: {activity.difficulty}</p>
                        <p key={activity.duration}>Duration: {activity.duration}</p>
                        <p key={activity.season}>Season: {activity.season}</p>
                        <div className={style.countriesContainer}>
                            <p>Countries</p>
                            {activity?.Countries?.map((country, index) =>
                                <div key={index} className={style.countryNameContainer}>
                                    <button onClick={()=>{deleteCountryHandler([country.id, activity.id])}} className={style.x} key={index}>x</button>
                                    <NavLink className={style.navlink} to={`/detail/${country.id}`}>
                                        <p key={country.name}>{country.name}</p>
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}