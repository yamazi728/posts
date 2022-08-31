import PostItem from '../PostItem/PostItem'
import styles from './PostList.module.css'

const PostList = ({ posts, deleted }) => {
	return (
		<div className={styles.postListWrapper}>
			<h2 className={styles.postTitle}>Posts about Frontend</h2>
			{posts.map((item, index) => (
				<PostItem
					key={item.id}
					post={item}
					index={index + 1}
					deleted={deleted}
				/>
			))}
		</div>
	)
}

export default PostList
