export const getRandomElementsFromArray = <T>(
  array: T[],
  numberOfElements: number,
) => {
  const selectedElements = [];
  const arrayCopy = [...array];

  for (let i = 0; i < numberOfElements; i++) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    selectedElements.push(arrayCopy.splice(randomIndex, 1)[0]);
  }

  return selectedElements;
};
