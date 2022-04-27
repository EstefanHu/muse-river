import { useGlobalState } from '../../lib/state';

import AppTemplate from '../../ui/templates/AppTemplate';
import Button from '../../ui/atoms/shared/Button';

const Profile = () => {
    const { state: { user }, logout } = useGlobalState();

    console.log(user);

    return (
        <AppTemplate>
            <p>{user}</p>
            <Button
                onClick={logout}
                label='log out'
            />
        </AppTemplate>
    )
};

export default Profile;
