<template>
    <div class="spinner">
        <div class="spinner__circle"></div>
    </div>
</template>

<style lang="scss" scoped>
    .spinner {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2rem;

        &__circle {
            width: 40px;
            height: 40px;
            border: 4px solid var(--color-border);
            border-top-color: var(--color-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
    }

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
</style>
