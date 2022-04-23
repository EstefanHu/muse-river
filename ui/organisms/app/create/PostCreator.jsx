import { useRouter } from 'next/router';
import DevotionForm from './DevotionForm';

const PostCreator = () => {
    const router = useRouter();
    const { type } = router.query;

    const renderForm = (type) => {
        switch (type) {
            case 'devotion':
                return <DevotionForm />;
        }
    };

    return renderForm(type);
};

export default PostCreator;
