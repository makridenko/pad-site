/* React */
import { useEffect } from 'react';

/* Router */
import { withRouter } from 'react-router-dom';


const ScrollToTop = ({ history }) => {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return(null);
};

export default withRouter(ScrollToTop);