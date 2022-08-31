import Input from '../UI/Input/Input'
import Select from '../UI/Select/Select'

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div className='filterComponent'>
			<Input
				onChange={e => setFilter({ ...filter, query: e.target.value })}
				value={filter.query}
				placeholder='Search'
			/>
			<Select
				onChange={sortedPost => setFilter({ ...filter, sortedPost })}
				value={filter.sort}
				defaultValue='
Sorting'
				options={[
					{ value: 'title', name: 'by title' },
					{ value: 'body', name: 'by description' },
				]}
			/>
		</div>
	)
}

export default PostFilter
