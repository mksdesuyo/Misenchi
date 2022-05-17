import List from '../views/pages/list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': List, // default page
  '/list': List,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
