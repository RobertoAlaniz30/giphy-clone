import type { NextPage } from 'next'
import Head from 'next/head'
import { getTrendingGifts } from '../services/getTrendingGifts'
import styles from '../styles/Home.module.scss'
import SearchBar from '../components/SearchBar/SearchBar'
import { useContext } from 'react'
import { StoreContext } from '../store/StoreProvider'
import { parseDataGiphs } from '../utils/parseDataGiphs'
import { useEffect } from 'react'
import ListGiphs from '../components/listGiphs/ListGiphs'
import { getSearchedGifts } from "../services/getSearchedGifts"
import { searchFavoritesGiphs } from '../utils/searchFavoritesGiphs'



const Home: NextPage = ({ data }: any): JSX.Element => {
  const { dispatch, store } = useContext(StoreContext)

  useEffect(() => {
    const favoritesAndGiphs = searchFavoritesGiphs(data);
    dispatch({
      type: "LOAD_GIPHS",
      payload: favoritesAndGiphs
    })
  }, [data])
  
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    dispatch({
      type: "SEARCH_GIPH",
      payload: e.target.value
    })
  }
  async function handleSearch() {
    dispatch({
      type: "TOOGLE_IS_LOADING",
    })
    try {
      const axiosResponse = await getSearchedGifts(store.textSearchedGiph)
      const data = axiosResponse.data.data
      const parsedGiphs = parseDataGiphs(data)
      dispatch({
        type: "RESULTS_SEARCHED_GIPHS",
        payload: parsedGiphs
      })
    } catch (e) {
      console.log(e)
    }
  }
  function handleOnReset() {
    dispatch({
      type: "RESET_SEARCH",
      payload: store.giphs
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.main_second_section}>
          <SearchBar
            onChange={handleChange}
            onSearch={handleSearch}
            onResetSearch={handleOnReset}
            value={store.textSearchedGiph} />
          <ListGiphs />
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const axiosResponse = await getTrendingGifts()
  const data = axiosResponse.data.data
  const parsedGiphs = parseDataGiphs(data)

  return {
    props: {
      data: parsedGiphs
    }
  }
}

export default Home
