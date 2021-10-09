import { of } from "rxjs";

// An anonymous user
const authState = {
    displayName: null,
    isAnonymous: true,
    uid: '17WvU2Vj58SnTz8v7EqyYYb0WRc2'
};

const mockAngularFireAuth: any = {
    auth: jasmine.createSpyObj('auth', {
        'signInAnonymously': Promise.reject({
            code: 'auth/operation-not-allowed'
        }),
        // 'signInWithPopup': Promise.reject(),
        // 'signOut': Promise.reject()
    }),
    authState: of(authState)
};

export default mockAngularFireAuth;