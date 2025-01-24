import { DocumentData, QuerySnapshot } from "@firebase/firestore";

export const querySnapshotToArray = <T extends DocumentData>(
  querySnapshot: QuerySnapshot<T>,
): (T & { id: string })[] => {
  return querySnapshot.docs.map((documentSnapshot) => ({
    ...documentSnapshot.data(),
    id: documentSnapshot.id,
  }));
};

// export const fetchCollectionOnce = async <T extends DocumentData>(
//   query: Query,
// ): Promise<Document<T>[]> => {
//   const querySnapshot = await query.get();
//
//   return querySnapshotToArray<T>(querySnapshot);
// };
//
// export const fetchDocumentOnce = async <T extends DocumentData>(
//   documentReference: DocumentReference,
// ): Promise<T | undefined> => {
//   const documentSnapshot =
//     (await documentReference.get()) as firebase.firestore.DocumentSnapshot<T>;
//
//   return documentSnapshot.data();
// };
//
// export const setDocument = async <T extends ObjectType>(
//   docRef: DocumentReference,
//   document: T,
// ): Promise<void> => docRef.set(document);
//
// export const updateDocument = async <T extends ObjectType>(
//   docRef: DocumentReference,
//   document: T,
// ): Promise<void> => docRef.update(document);
//
// export const mergeDocument = async <T extends ObjectType>(
//   docRef: DocumentReference,
//   document: T,
// ): Promise<void> => docRef.set(document, { merge: true });
//
// export const deleteDocument = async (
//   docRef: DocumentReference,
// ): Promise<void> => docRef.delete();
