import React,{ useState, useContext, useCallback } from 'react'
import { Text, ActivityIndicator, View } from 'react-native'


import { useNavigation, useFocusEffect } from '@react-navigation/native'
import  Header  from '../../components/Header'

import Feather from 'react-native-vector-icons/Feather'
import { AuthContext} from '../../contexts/auth'
import firestore from '@react-native-firebase/firestore'

import { Container, ButtonPost, ListPosts } from './styles'


function Home(){

  const navigation = useNavigation();
  const { user } = useContext(AuthContext)

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useFocusEffect(
    useCallback( () => {
      let isActive = true;

      function fetchPosts(){
        firestore().collection('posts')
        .orderBy('created', 'desc')
        .limit(5)
        .get()
        .then((snapshot) =>{
          
          if(isActive){
            setPosts([]);
            const postList = []

            snapshot.docs.map( u =>{
              postList.push({
                ...u.data(),
                id: u.id,
              })
            })

            setPosts(postList)
            setLoading(false)
          }
        })
      }

      fetchPosts()

      return () =>{
        isActive = false
      }
    },[])
  )

  return(
    <Container>
      <Header />

      { loading? (
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

          <ActivityIndicator size={50} color="#004B8C"/>
         </View>

      ):(
        <ListPosts 
          data={posts}
          renderItem={ ({item}) => (<Text>TESTE</Text>)}
        />
      )}

      

      <ButtonPost 
        activeOpacity={0.8}
        onPress={ () => navigation.navigate("NewPost")}
      >
        <Feather 
          name="edit-2"
          color="#fff"
          size={25}
        />
      </ButtonPost>
    </Container>
  )
}

export default Home;