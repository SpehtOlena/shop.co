import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { Layout, Menu } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';


function App() {
	const location = useLocation();
	const navigate = useNavigate();
	const menuItems = [
		{
			label: <Link to={'/shop'}>{'Shop'}</Link>,
			key: "shop"
		},
		{
			label: <Link to={'/on_sale'}>{'On Sale'}</Link>,
			key: "on_sale"
		},
		{
			label: <Link to={'/new_arrivals'}>{'New Arrivals'}</Link>,
			key: "new_arrivals"
		},
		{
			label: <Link to={'/brands'}>{'Brands'}</Link>,
			key: "brands"
		},
	]
	return (
		<Layout className="App">
			<Header>
				<div className={'header-menu'}>
					<Menu items={menuItems} mode={'horizontal'} selectedKeys={[location.pathname.split('/')[1]]} />

				</div>
			</Header>
			<Content>
				<Outlet />
			</Content>
			<Footer></Footer>
		</Layout>
	);
}

export default App;
