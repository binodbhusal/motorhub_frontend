import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ element }) {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token && token.startsWith('Bearer ');

  return isAuthenticated ? element : <Navigate to="/login" replace />;
}

PrivateRoute.propTypes = {
  element: PropTypes.node.isRequired,
};
