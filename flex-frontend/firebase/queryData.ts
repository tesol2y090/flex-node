import { QueryData } from "../types"
import { db } from "../firebase/clientApp"
import {
  doc,
  collection,
  query,
  getDocs,
  where,
  limit,
} from "@firebase/firestore"
import { setDoc } from "firebase/firestore"

const queryCollection = collection(db, "queryData")

export const addQueryData = async (payload: QueryData) => {
  try {
    const dbRef = doc(db, `queryData/${payload.id}`)

    await setDoc(dbRef, { ...payload })
  } catch (e) {
    throw new Error("Something went wrong")
  }
}

export const getQueryDataOne = async (
  id: string | string[]
): Promise<QueryData | undefined> => {
  let result
  const todosQuery = query(queryCollection, where("id", "==", id), limit(1))
  const queryData = await getDocs(todosQuery)
  queryData.forEach((data) => {
    result = data.data() as QueryData
  })
  return result
}

export const getQueryData = async () => {
  const querySnapshot = await getDocs(queryCollection)
  const queryList = querySnapshot.docs.map((doc) => doc.data())
  return queryList
}
