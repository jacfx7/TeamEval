const collectionStub = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue({})
}

const mockAngularFireStore = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
}

export default mockAngularFireStore;