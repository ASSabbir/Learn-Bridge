
import Banner from './Banner';

import Others from './Others';
import OtherSecons from './OtherSecons';
import RecentCards from './RecentCards';
import Review from './Review';
import SecondSection from './SecondSection';
import SessionCard from './SessionCard';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <SecondSection></SecondSection>
            <SessionCard></SessionCard>
            <Others></Others>
            <OtherSecons></OtherSecons>
            
            <RecentCards></RecentCards>
            <Review></Review>
        </div>
    );
};

export default Home;