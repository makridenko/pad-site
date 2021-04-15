/* React */
import { useEffect, useContext } from 'react';

/* Router */
import { withRouter } from 'react-router-dom';

/* Context */
import { AppContext } from '../../App';



const ScrollToTop = ({ history }) => {
  const { setWithPhoto, setNewRelease } = useContext(AppContext);
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      setWithPhoto(false)

      if (history.location.pathname === '/') {
        setWithPhoto(true);
        setNewRelease(false);
      }
    });
    return () => {
      unlisten();
    }
  }, [history, setWithPhoto, setNewRelease]);

  return(null);
};

export default withRouter(ScrollToTop);