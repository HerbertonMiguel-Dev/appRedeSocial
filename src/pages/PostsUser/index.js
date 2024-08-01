import React, { useLayoutEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

function PostsUser(){
  const route = useRoute()
  const navigation = useNavigation()

  const [title, setTitle] = useState(route.params?.title)

  useLayoutEffect( () => {
    navigation.setOptions({
      title: title === '' ? '' : title
    })
  }, [navigation, title] )

  return(
    <View>
      <Text>{route.params?.title}</Text>
    </View>
  )
}

export default PostsUser;