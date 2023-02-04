// Package / Dependency Imports
import styled from 'styled-components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs } from "firebase/firestore";
// Local Imports
import { db } from '../firebase/firebase';
import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/users/userSlice';
import ImageSlider from './ImageSlider';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Recommends from './Recommends';
import Trending from './Trending';
import Viewers from './Viewers';


const Home = (props) => {
    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let trending = [];
    let originals = [];
    let newDisney = [];

    useEffect(() => {
        getAllMovies();
        
        dispatch(setMovies({ recommends, trending, originals, newDisney }));
    }, [ userName ]);

    const getAllMovies = async () => {
        const querySnapshot = await getDocs(collection(db, "movies"));
        querySnapshot.forEach((doc) => {
            switch (doc.data().type) {
                case 'recommend':
                    recommends = [...recommends, { id: doc.id, ...doc.data() }];
                    console.log('recommends');
                    console.log(recommends);
                    break;
                case 'trending':
                    trending = [...trending, { id: doc.id, ...doc.data() }];
                    break;
                case 'original':
                    originals = [...originals, { id: doc.id, ...doc.data() }];
                    break;
                default:
                    newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
                    break;
            }
        });
    };

    return (
        <Container>
            <ImageSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    );
};


const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
    overflow-x: hidden;
    display: block;
    padding: calc(3.2wv - 5px);
    top: 72px;

    &:after {
        background: url('images/home-background.png') center center / cover no-repeat fixed;
        position: absolute;
        content: '';
        inset: 0;
        z-index: -1;
    }
`;


export default Home;
