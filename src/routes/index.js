import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound/NotFound";
import Shop from '../pages/Shop/Shop';
import OnSale from '../pages/OnSale/OnSale';
import NewArrivals from '../pages/NewArrivals/NewArrivals';
import Brands from '../pages/Brands/Brands';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: 'shop',
				element: <Shop />
			},
			{
				path: 'on_sale',
				element: <OnSale />
			},
			{
				path: 'new_arrivals',
				element: <NewArrivals />
			},
			{
				path: 'brands',
				element: <Brands />
			},
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
])