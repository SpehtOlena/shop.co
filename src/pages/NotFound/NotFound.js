import { Link } from 'react-router-dom';
import './NotFound.scss';
import { Button, Result } from 'antd';

const NotFound = () => {
	return (
		<Result
			status="404"
			title="404"
			subTitle="Sorry, the page you visited does not exist."
			extra={
				<Link to={'/'}>
					<Button type="primary">Back Home</Button>
				</Link>
			}
		/>
	)
}
export default NotFound