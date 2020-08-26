import axios from "axios";
import {setPost} from "./postsMutations";

export function setPostToServer(values) {

    return dispatch =>
        axios.post('', {
            title: values.title,
            fulltext: values.fulltext,
            // description:values.description,
        })
            .then(function (response) {

                dispatch(setPost(response.data))

            })

            .catch(e => {
                console.log('oshibka pri poste', e);
            })
}