"use client"
import React, { useEffect } from 'react'
import { CollectionItem } from '../../../types';
import useCollectionsStore from '../../../hooks/client/global/useCollectionsStore';
import { useWixClient } from '../../../hooks/client/wix/useWixClient';
import useAuthStore from '../../../hooks/client/global/useAuthStore';
import { useIsLoggedIn } from '../../../hooks/client/auth/useIsLoggedIn';

interface OnlyForSearchCollectionsProps {
collections: CollectionItem[];
}

function OnlyForSearchCollections({collections}:OnlyForSearchCollectionsProps) {
const {setCollections} = useCollectionsStore()

const {isLoggedIn}= useIsLoggedIn()

  const wixClient = useWixClient();

  const {setIsLoggedIn, setLoading}= useAuthStore()


useEffect(()=>{
    setCollections(collections)
},[setCollections, collections])


  useEffect(() => {
    setIsLoggedIn(isLoggedIn);
    setLoading(false);
  }, [isLoggedIn, setIsLoggedIn, setLoading]);

  return (
    <></>
  )
}

export default OnlyForSearchCollections