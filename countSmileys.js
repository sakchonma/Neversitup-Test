function checkIsSmaileys(face) {
    let eye, nose, mouth;

    if (face.length === 2) {
        eye = face[0];
        mouth = face[1];
        nose = '';
    } else if (face.length === 3) {
        eye = face[0];
        nose = face[1];
        mouth = face[2];
    } else {
        return false;
    }
    console.log(eye, nose, mouth)
    switch (eye) {
        case ':':
        case ';':
            break;
        default:
            return false;
    }

    switch (nose) {
        case '-':
        case '~':
        case '':
            break;
        default:
            return false;
    }

    switch (mouth) {
        case ')':
        case 'D':
            break;
        default:
            return false;
    }

    return true;
}
function countSmileys(arr) {
    let count = 0;

    for (const face of arr) {
        if (checkIsSmaileys(face)) {
            count++;
        }
    }

    return count;
}

// Example Usage
console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1
