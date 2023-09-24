import { useSelector } from 'react-redux'

import Card from '../Card/card';

export default function Cards() {

    const countries = useSelector(state => state.countries);

    return (
        <>
            <div>
                {countries?.map(country =>
                    <Card
                        name={country.name}
                        flag={country.flag}
                        continent={country.continent}
                        id={country.id}
                        key={country.id}
                    />
                )}
            </div>
        </>
    )
}