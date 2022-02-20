const useScrollTop = () => {
  const handleScrollMove = (movePoint: number) => {
    window.scrollTo({
      behavior: 'smooth',
      top: movePoint,
    });
  };
  return { handleScrollMove };
};

export default useScrollTop;
