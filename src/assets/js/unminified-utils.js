/**
 * ================================================================================
 * 
 *     MAUVAISE PRATIQUE BP77: Fichier JavaScript NON MINIFIÉ
 * 
 *     Ce fichier contient du JavaScript verbeux avec:
 *     - Des commentaires excessifs et redondants
 *     - Des espaces et indentations inutiles
 *     - Des sauts de ligne superflus
 *     - Des noms de variables et fonctions très longs
 *     - Du code qui devrait être minifié/uglified
 *     
 *     La bonne pratique serait d'utiliser Terser, UglifyJS ou Babel-minify
 *     pour supprimer tous ces caractères inutiles.
 * 
 * ================================================================================
 */




/* =============================================================================
 *
 *     SECTION 1: CONSTANTES ET CONFIGURATION
 *     
 *     Cette section définit les constantes de l'application avec des noms
 *     très longs et descriptifs qui augmentent inutilement la taille.
 *     
 * ============================================================================= */




/**
 * Configuration principale de l'application
 * Ces constantes sont utilisées dans toute l'application
 */
const APPLICATION_CONFIGURATION_MAIN_SETTINGS_OBJECT = {


    /**
     * Le nom de l'application
     * Utilisé dans le titre de la page et les métadonnées
     */
    applicationNameForTitleAndMetadata: 'Conduit Application',
    
    
    /**
     * La version de l'application
     * Format: MAJEUR.MINEUR.PATCH
     */
    applicationVersionNumberString: '1.0.0',
    
    
    /**
     * L'URL de base de l'API
     * Toutes les requêtes API seront préfixées par cette URL
     */
    apiBaseUrlForAllHttpRequests: 'https://api.realworld.io/api',
    
    
    /**
     * Le délai de timeout par défaut pour les requêtes HTTP
     * En millisecondes
     */
    defaultHttpRequestTimeoutInMilliseconds: 30000,
    
    
    /**
     * Le nombre maximum de tentatives pour les requêtes échouées
     */
    maximumNumberOfRetryAttemptsForFailedRequests: 3,
    
    
    /**
     * L'intervalle entre les tentatives de retry
     * En millisecondes
     */
    intervalBetweenRetryAttemptsInMilliseconds: 1000,


};




/**
 * Messages d'erreur de l'application
 * Ces messages sont affichés à l'utilisateur en cas d'erreur
 */
const ERROR_MESSAGES_FOR_USER_DISPLAY_OBJECT = {


    /**
     * Message d'erreur générique
     * Affiché quand l'erreur n'est pas identifiée
     */
    genericErrorMessageForUnknownErrors: 'Une erreur inattendue s\'est produite. Veuillez réessayer ultérieurement.',
    
    
    /**
     * Message d'erreur réseau
     * Affiché quand la connexion réseau échoue
     */
    networkConnectionErrorMessage: 'Impossible de se connecter au serveur. Vérifiez votre connexion internet.',
    
    
    /**
     * Message d'erreur d'authentification
     * Affiché quand les identifiants sont invalides
     */
    authenticationFailedErrorMessage: 'Identifiants invalides. Veuillez vérifier votre email et mot de passe.',
    
    
    /**
     * Message d'erreur d'autorisation
     * Affiché quand l'utilisateur n'a pas les droits
     */
    authorizationDeniedErrorMessage: 'Vous n\'avez pas les droits nécessaires pour effectuer cette action.',
    
    
    /**
     * Message d'erreur de validation
     * Affiché quand les données du formulaire sont invalides
     */
    formValidationErrorMessage: 'Veuillez corriger les erreurs dans le formulaire avant de soumettre.',
    
    
    /**
     * Message d'erreur de ressource non trouvée
     * Affiché quand la ressource demandée n'existe pas
     */
    resourceNotFoundErrorMessage: 'La ressource demandée n\'a pas été trouvée.',
    
    
    /**
     * Message d'erreur de timeout
     * Affiché quand la requête prend trop de temps
     */
    requestTimeoutErrorMessage: 'La requête a pris trop de temps. Veuillez réessayer.',


};




/**
 * Messages de succès de l'application
 */
const SUCCESS_MESSAGES_FOR_USER_DISPLAY_OBJECT = {


    /**
     * Message de succès pour la connexion
     */
    loginSuccessMessage: 'Connexion réussie ! Bienvenue.',
    
    
    /**
     * Message de succès pour la déconnexion
     */
    logoutSuccessMessage: 'Vous avez été déconnecté avec succès.',
    
    
    /**
     * Message de succès pour la création d'un article
     */
    articleCreatedSuccessMessage: 'Votre article a été publié avec succès.',
    
    
    /**
     * Message de succès pour la mise à jour d'un article
     */
    articleUpdatedSuccessMessage: 'Votre article a été mis à jour avec succès.',
    
    
    /**
     * Message de succès pour la suppression d'un article
     */
    articleDeletedSuccessMessage: 'Votre article a été supprimé.',
    
    
    /**
     * Message de succès pour l'ajout d'un commentaire
     */
    commentAddedSuccessMessage: 'Votre commentaire a été ajouté.',
    
    
    /**
     * Message de succès pour la mise à jour du profil
     */
    profileUpdatedSuccessMessage: 'Votre profil a été mis à jour avec succès.',


};




/* =============================================================================
 *
 *     SECTION 2: FONCTIONS UTILITAIRES
 *     
 *     Ces fonctions sont utilisées dans toute l'application.
 *     Leurs noms sont intentionnellement très longs pour illustrer
 *     la mauvaise pratique de ne pas minifier.
 *     
 * ============================================================================= */




/**
 * Fonction pour formater une date en chaîne lisible
 * 
 * @param {Date} dateObjectToFormat - L'objet Date à formater
 * @param {string} formatPatternString - Le pattern de format souhaité
 * @returns {string} La date formatée en chaîne de caractères
 * 
 * Cette fonction prend un objet Date et le formate selon le pattern spécifié.
 * Les patterns supportés sont: 'short', 'medium', 'long', 'full'
 */
function formatDateObjectToReadableStringWithPattern(dateObjectToFormat, formatPatternString) {


    /**
     * Vérification que la date est valide
     */
    if (!(dateObjectToFormat instanceof Date) || isNaN(dateObjectToFormat.getTime())) {
    
    
        console.error('La date fournie n\'est pas valide:', dateObjectToFormat);
        
        
        return 'Date invalide';
        
        
    }
    
    
    /**
     * Options de formatage selon le pattern
     */
    const formattingOptionsForDifferentPatterns = {
    
    
        short: {
        
            year: 'numeric',
            
            month: 'numeric',
            
            day: 'numeric'
            
        },
        
        
        medium: {
        
            year: 'numeric',
            
            month: 'short',
            
            day: 'numeric'
            
        },
        
        
        long: {
        
            year: 'numeric',
            
            month: 'long',
            
            day: 'numeric',
            
            weekday: 'long'
            
        },
        
        
        full: {
        
            year: 'numeric',
            
            month: 'long',
            
            day: 'numeric',
            
            weekday: 'long',
            
            hour: 'numeric',
            
            minute: 'numeric',
            
            second: 'numeric'
            
        }
        
        
    };
    
    
    /**
     * Sélection des options selon le pattern
     */
    const selectedFormattingOptions = formattingOptionsForDifferentPatterns[formatPatternString] || formattingOptionsForDifferentPatterns.medium;
    
    
    /**
     * Formatage de la date avec Intl.DateTimeFormat
     */
    const dateTimeFormatterForLocale = new Intl.DateTimeFormat('fr-FR', selectedFormattingOptions);
    
    
    /**
     * Retour de la date formatée
     */
    return dateTimeFormatterForLocale.format(dateObjectToFormat);
    
    
}




/**
 * Fonction pour valider une adresse email
 * 
 * @param {string} emailAddressToValidate - L'adresse email à valider
 * @returns {boolean} true si l'email est valide, false sinon
 * 
 * Cette fonction vérifie si l'adresse email fournie est dans un format valide.
 * Elle utilise une expression régulière pour la validation.
 */
function validateEmailAddressFormatWithRegularExpression(emailAddressToValidate) {


    /**
     * Vérification que l'email est une chaîne non vide
     */
    if (typeof emailAddressToValidate !== 'string' || emailAddressToValidate.trim() === '') {
    
    
        console.warn('L\'adresse email fournie est vide ou n\'est pas une chaîne');
        
        
        return false;
        
        
    }
    
    
    /**
     * Expression régulière pour valider le format email
     * Cette regex vérifie:
     * - Au moins un caractère avant le @
     * - Un caractère @ obligatoire
     * - Au moins un caractère après le @
     * - Un point obligatoire
     * - Au moins deux caractères après le dernier point
     */
    const emailValidationRegularExpressionPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    
    
    /**
     * Test de l'email contre la regex
     */
    const emailIsValidAccordingToRegex = emailValidationRegularExpressionPattern.test(emailAddressToValidate);
    
    
    /**
     * Log du résultat pour le debug
     */
    console.log(`Validation de l'email "${emailAddressToValidate}": ${emailIsValidAccordingToRegex ? 'valide' : 'invalide'}`);
    
    
    /**
     * Retour du résultat
     */
    return emailIsValidAccordingToRegex;
    
    
}




/**
 * Fonction pour tronquer un texte à une longueur maximale
 * 
 * @param {string} textToTruncate - Le texte à tronquer
 * @param {number} maximumLengthInCharacters - La longueur maximale souhaitée
 * @param {string} ellipsisStringToAppend - Les caractères à ajouter si tronqué
 * @returns {string} Le texte tronqué avec ellipsis si nécessaire
 * 
 * Cette fonction tronque un texte s'il dépasse la longueur maximale
 * et ajoute des caractères d'ellipsis à la fin.
 */
function truncateTextToMaximumLengthWithEllipsis(textToTruncate, maximumLengthInCharacters, ellipsisStringToAppend = '...') {


    /**
     * Vérification que le texte est une chaîne
     */
    if (typeof textToTruncate !== 'string') {
    
    
        console.error('Le texte à tronquer doit être une chaîne de caractères');
        
        
        return '';
        
        
    }
    
    
    /**
     * Si le texte est plus court que la longueur max, on le retourne tel quel
     */
    if (textToTruncate.length <= maximumLengthInCharacters) {
    
    
        return textToTruncate;
        
        
    }
    
    
    /**
     * Calcul de la longueur de troncature
     * On soustrait la longueur de l'ellipsis
     */
    const truncationLengthWithoutEllipsis = maximumLengthInCharacters - ellipsisStringToAppend.length;
    
    
    /**
     * Troncature du texte
     */
    const truncatedTextWithoutEllipsis = textToTruncate.substring(0, truncationLengthWithoutEllipsis);
    
    
    /**
     * Ajout de l'ellipsis et retour
     */
    return truncatedTextWithoutEllipsis + ellipsisStringToAppend;
    
    
}




/**
 * Fonction pour générer un identifiant unique
 * 
 * @param {string} prefixForIdentifier - Un préfixe optionnel pour l'ID
 * @returns {string} Un identifiant unique
 * 
 * Cette fonction génère un identifiant unique en combinant
 * un timestamp, un nombre aléatoire et un préfixe optionnel.
 */
function generateUniqueIdentifierWithTimestampAndRandom(prefixForIdentifier = 'id') {


    /**
     * Obtention du timestamp actuel en millisecondes
     */
    const currentTimestampInMilliseconds = Date.now();
    
    
    /**
     * Génération d'un nombre aléatoire
     */
    const randomNumberForUniqueness = Math.random().toString(36).substring(2, 11);
    
    
    /**
     * Combinaison des éléments pour créer l'ID unique
     */
    const generatedUniqueIdentifier = `${prefixForIdentifier}_${currentTimestampInMilliseconds}_${randomNumberForUniqueness}`;
    
    
    /**
     * Log de l'ID généré
     */
    console.log('ID unique généré:', generatedUniqueIdentifier);
    
    
    /**
     * Retour de l'ID
     */
    return generatedUniqueIdentifier;
    
    
}




/**
 * Fonction pour debounce
 * 
 * @param {Function} functionToDebounce - La fonction à exécuter
 * @param {number} delayInMilliseconds - Le délai avant exécution
 * @returns {Function} La fonction debounced
 * 
 * Cette fonction retourne une version debounced de la fonction passée.
 * La fonction ne sera exécutée qu'après le délai spécifié depuis le
 * dernier appel.
 */
function createDebouncedVersionOfFunctionWithDelay(functionToDebounce, delayInMilliseconds = 300) {


    /**
     * Variable pour stocker le timer
     */
    let timeoutIdentifierForDebounce = null;
    
    
    /**
     * Retour de la fonction debounced
     */
    return function debouncedFunctionWrapper(...argumentsPassedToFunction) {
    
    
        /**
         * Le contexte this de l'appel
         */
        const contextForFunctionCall = this;
        
        
        /**
         * Annulation du timer précédent s'il existe
         */
        if (timeoutIdentifierForDebounce !== null) {
        
        
            clearTimeout(timeoutIdentifierForDebounce);
            
            
        }
        
        
        /**
         * Création d'un nouveau timer
         */
        timeoutIdentifierForDebounce = setTimeout(function executeAfterDelay() {
        
        
            /**
             * Exécution de la fonction originale
             */
            functionToDebounce.apply(contextForFunctionCall, argumentsPassedToFunction);
            
            
        }, delayInMilliseconds);
        
        
    };
    
    
}




/**
 * Fonction pour throttle
 * 
 * @param {Function} functionToThrottle - La fonction à throttler
 * @param {number} intervalInMilliseconds - L'intervalle minimum entre les appels
 * @returns {Function} La fonction throttled
 * 
 * Cette fonction retourne une version throttled de la fonction passée.
 * La fonction ne pourra être exécutée qu'une fois par intervalle spécifié.
 */
function createThrottledVersionOfFunctionWithInterval(functionToThrottle, intervalInMilliseconds = 300) {


    /**
     * Variable pour savoir si on peut exécuter
     */
    let isWaitingForNextAllowedExecution = false;
    
    
    /**
     * Retour de la fonction throttled
     */
    return function throttledFunctionWrapper(...argumentsPassedToFunction) {
    
    
        /**
         * Le contexte this de l'appel
         */
        const contextForFunctionCall = this;
        
        
        /**
         * Si on attend, on ne fait rien
         */
        if (isWaitingForNextAllowedExecution) {
        
        
            return;
            
            
        }
        
        
        /**
         * Exécution de la fonction
         */
        functionToThrottle.apply(contextForFunctionCall, argumentsPassedToFunction);
        
        
        /**
         * Passage en mode attente
         */
        isWaitingForNextAllowedExecution = true;
        
        
        /**
         * Timer pour réautoriser l'exécution
         */
        setTimeout(function allowNextExecution() {
        
        
            isWaitingForNextAllowedExecution = false;
            
            
        }, intervalInMilliseconds);
        
        
    };
    
    
}




/**
 * Fonction pour deep clone un objet
 * 
 * @param {Object} objectToClone - L'objet à cloner
 * @returns {Object} Une copie profonde de l'objet
 * 
 * Cette fonction crée une copie profonde de l'objet passé en paramètre.
 * Tous les objets et tableaux imbriqués sont également copiés.
 */
function createDeepCloneOfObjectRecursively(objectToClone) {


    /**
     * Gestion des cas null et undefined
     */
    if (objectToClone === null || objectToClone === undefined) {
    
    
        return objectToClone;
        
        
    }
    
    
    /**
     * Gestion des types primitifs
     */
    if (typeof objectToClone !== 'object') {
    
    
        return objectToClone;
        
        
    }
    
    
    /**
     * Gestion des dates
     */
    if (objectToClone instanceof Date) {
    
    
        return new Date(objectToClone.getTime());
        
        
    }
    
    
    /**
     * Gestion des tableaux
     */
    if (Array.isArray(objectToClone)) {
    
    
        const clonedArrayWithDeepCopiedElements = [];
        
        
        for (let indexInArray = 0; indexInArray < objectToClone.length; indexInArray++) {
        
        
            clonedArrayWithDeepCopiedElements[indexInArray] = createDeepCloneOfObjectRecursively(objectToClone[indexInArray]);
            
            
        }
        
        
        return clonedArrayWithDeepCopiedElements;
        
        
    }
    
    
    /**
     * Gestion des objets
     */
    const clonedObjectWithDeepCopiedProperties = {};
    
    
    for (const propertyKeyInObject in objectToClone) {
    
    
        if (objectToClone.hasOwnProperty(propertyKeyInObject)) {
        
        
            clonedObjectWithDeepCopiedProperties[propertyKeyInObject] = createDeepCloneOfObjectRecursively(objectToClone[propertyKeyInObject]);
            
            
        }
        
        
    }
    
    
    return clonedObjectWithDeepCopiedProperties;
    
    
}




/**
 * Fonction pour formater un nombre
 * 
 * @param {number} numberToFormat - Le nombre à formater
 * @param {number} decimalPlaces - Le nombre de décimales
 * @param {string} thousandsSeparator - Le séparateur des milliers
 * @param {string} decimalSeparator - Le séparateur décimal
 * @returns {string} Le nombre formaté
 */
function formatNumberWithSeparatorsAndDecimals(numberToFormat, decimalPlaces = 2, thousandsSeparator = ' ', decimalSeparator = ',') {


    /**
     * Vérification que c'est un nombre
     */
    if (typeof numberToFormat !== 'number' || isNaN(numberToFormat)) {
    
    
        console.error('La valeur fournie n\'est pas un nombre valide');
        
        
        return 'NaN';
        
        
    }
    
    
    /**
     * Arrondi au nombre de décimales souhaité
     */
    const roundedNumberWithDecimals = numberToFormat.toFixed(decimalPlaces);
    
    
    /**
     * Séparation de la partie entière et décimale
     */
    const [integerPartOfNumber, decimalPartOfNumber] = roundedNumberWithDecimals.split('.');
    
    
    /**
     * Ajout des séparateurs de milliers
     */
    const integerPartWithThousandsSeparators = integerPartOfNumber.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
    
    
    /**
     * Reconstruction du nombre formaté
     */
    const formattedNumberString = decimalPartOfNumber 
        ? integerPartWithThousandsSeparators + decimalSeparator + decimalPartOfNumber
        : integerPartWithThousandsSeparators;
    
    
    return formattedNumberString;
    
    
}




/* =============================================================================
 *
 *     SECTION 3: INITIALISATION
 *     
 * ============================================================================= */




/**
 * Fonction d'initialisation appelée au chargement
 */
function initializeApplicationOnDocumentReady() {


    console.log('BP77 - MAUVAISE PRATIQUE: Ce fichier JavaScript n\'est PAS minifié');
    
    console.log('Il contient des commentaires excessifs, des espaces, des noms longs');
    
    console.log('La bonne pratique serait d\'utiliser Terser, UglifyJS ou Babel-minify');
    
    console.log('Configuration:', APPLICATION_CONFIGURATION_MAIN_SETTINGS_OBJECT);


}




/**
 * Attente du chargement du DOM pour initialiser
 */
if (document.readyState === 'loading') {


    document.addEventListener('DOMContentLoaded', initializeApplicationOnDocumentReady);
    
    
} else {


    initializeApplicationOnDocumentReady();
    
    
}




/* =============================================================================
 *
 *     FIN DU FICHIER JAVASCRIPT NON MINIFIÉ
 *     
 *     Ce fichier fait environ 25Ko alors qu'il pourrait faire 3Ko minifié.
 *     C'est un exemple de ce qu'il ne faut PAS faire selon la BP77.
 *     
 *     Outils recommandés pour la minification:
 *     - Terser
 *     - UglifyJS
 *     - Babel-minify
 *     
 * ============================================================================= */
