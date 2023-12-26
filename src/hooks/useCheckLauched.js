const {RnGet} = require('./RnstoreHook');

const FirstLauched = async () => {
  //is Launched first time
  try {
    const user = await RnGet('userOnBoarded');
    if (user === null) return true;
    return false;
  } catch (err) {
    return false;
  }
};
const useGetOnBoardingStatus = () => {
  const [isFirstLunched, setFirstLunched] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  useEffect(async () => {
    const status = await FirstLauched();
    setFirstLunched(status);
    setisLoading(false);
  }, []);

  return {
    isFirstLunched: isFirstLunched,
    isLoading: isLoading,
  };
};

export default useGetOnBoardingStatus;
