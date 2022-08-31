import Button from '../UI/Button/Button'
import styles from './PostItem.module.css'

const PostItem = ({ post, index, deleted }) => {
	return (
		<div className={styles.postItemWrapper}>
			<div className={styles.postItem}>
				<h3>{index}</h3>
				<div className={styles.postItemText}>
					<strong>{post.title}</strong>
					<p>{post.body}</p>
				</div>
				<div className={styles.postItemBtn}>
					<Button>Open</Button>
					<Button onClick={() => deleted(post)}>Delete</Button>
				</div>
			</div>
		</div>
	)
}

export default PostItem
