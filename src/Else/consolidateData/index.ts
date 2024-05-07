function deduplicationWithSet(arr: string[]) {
  return [...new Set(arr)].sort();
}

interface Session {
  user: number;
  duration: number;
  books: string[];
}
export const consolidateData2 = (sessions: Session[]) => {
  const arraySort: number[] = [];
  const sessionMap: Record<number, Session> = {};
  const result: Session[] = [];

  sessions.forEach((item) => {
    if (!arraySort.includes(item.user)) {
      arraySort.push(item.user);
    }
    if (!sessionMap[item.user]) {
      sessionMap[item.user] = item;
    } else {
      sessionMap[item.user]['duration'] += item.duration;
      sessionMap[item.user]['books'] = deduplicationWithSet([
        ...sessionMap[item.user]['books'],
        ...item.books,
      ]);
    }
  });

  arraySort.forEach((item) => {
    result.push(sessionMap[item]);
  });

  return result;
};

export const consolidateData = (sessions: Session[]) => {
  const mergeData: Session[] = [];
  const seenUsers = new Set();

  sessions.forEach((item) => {
    const { user: userId, duration, books } = item;
    if (seenUsers.has(userId)) {
      const existingIndex = mergeData.findIndex((user) => user.user === userId);
      mergeData[existingIndex]['duration'] += duration;
      mergeData[existingIndex]['books'] = [
        ...new Set([...mergeData[existingIndex]['books'], ...books]),
      ].sort();
    } else {
      mergeData.push(item);
      seenUsers.add(userId);
    }
  });

  return mergeData;
};
