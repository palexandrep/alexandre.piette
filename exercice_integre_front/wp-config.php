<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'zooparc');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'root');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'NE4`9HWb`7=Yd0~`(<m9_G+60=dElCwua.bo(%&vTg/bxic#td6?CPORDnAyG~AT');
define('SECURE_AUTH_KEY',  'vuT:+kCJd$g>v|Xy&AMkkrI2Fan-jgt4!5hp[|tFxo5Fio@BCE3v$oL~zb&2(t!Y');
define('LOGGED_IN_KEY',    '/H61dOL])qzJh%o(ZT+KTbXint$fNOOyUX@jDzYG7ybuk+%Ky#-h[+F-uAy$dk?(');
define('NONCE_KEY',        'rK4C<Yexoa79secDQ7 -m99B`M _X lamp#_T}^RXcwJu7l8*uKeXx-sCd]vrijS');
define('AUTH_SALT',        '^K7Gl^qER|u)7xK3snBZh;ZQ2hZw5P|p16x9MkaEPVBOZ:l{05!6COrldjuq3d$6');
define('SECURE_AUTH_SALT', 'm5S$8KBRO+:EYdJ7}#[QVvG{o6??Szh*Pl|v=m&bX^Y?sU@`4+F^%edOcy!mcS)M');
define('LOGGED_IN_SALT',   '~}P%n!+Cy&tM,b,F*viLLSqMWxuxrSKc>j7@b1<e [*{NV0pd?K,c[/n4*N2>D~o');
define('NONCE_SALT',       'XxoI6sd?)A@X^yBHv]-cz?##e~Tl;24^A&X*K</Al>F21V%?-Y-2V|hmZ8E;m]dW');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');