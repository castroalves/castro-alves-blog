---
title: "How to check WordPress user role in an Angular application"
date: "2020-04-07"
---

This was published originally on [Stack Overflow](https://stackoverflow.com/questions/61079973/how-to-check-user-role-from-wordpress-in-a-angular-application/61083406).

You can pass in PHP data to JavaScript using [wp_localize_script](https://codex.wordpress.org/Function_Reference/wp_localize_script):

```php:title=functions.php
function so61079973_enqueue_scripts() {
    // Register the script
    wp_register_script( 'your-script', 'path/to/myscript.js' );

    // Get the user object.
    $user = get_userdata( $user_id );

    // Get all the user roles as an array.
    $user_roles = $user->roles;

    // Localize the script with new data
    $data_array = array(
        'is_logged_in' => is_user_logged_in(),
        'user_roles' => json_encode( $user_roles )
    );

    wp_localize_script( 'your-script', 'user_data', $data_array );

    // Enqueued script with localized data.
    wp_enqueue_script( 'your-script' );
}
add_action('wp_enqueue_scripts', 'so61079973_enqueue_scripts');
```

Then, in the JavaScript, you can get the data by calling the `user_data` object:

```js
console.log(user_data.is_logged_in);
console.log(user_data.user_roles);
```
