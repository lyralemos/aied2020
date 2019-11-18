<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <router-link :to="{name:'home'}" class="navbar-brand">
            <img src="../assets/aied2020-white.png" alt="AIED2020" title="" style="height: 3.8rem;">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link
                    :to="{ name: 'home' }"
                    v-slot="{ href, route, navigate, isActive, isExactActive }"
                    >
                    <li :class=" ['nav-item', isExactActive && 'active']">
                        <a class="nav-link" :href="href" @click="navigate">Home</a>
                    </li>
                </router-link>
                <router-link
                    to="/dates"
                    v-slot="{ href, route, navigate, isActive, isExactActive }"
                    >
                    <li :class=" ['nav-item', isExactActive && 'active']">
                        <a class="nav-link" :href="href" @click="navigate">Dates</a>
                    </li>
                </router-link>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Calls
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link
                            :to="{ name: 'general' }"
                            v-slot="{ href, route, navigate, isActive, isExactActive }"
                            >
                            <a class="dropdown-item" :href="href" @click="navigate">General Call</a>
                        </router-link>
                        <router-link
                            :to="{ name: 'industry' }"
                            v-slot="{ href, route, navigate, isActive, isExactActive }"
                            >
                            <a class="dropdown-item" :href="href" @click="navigate">Call for industry papers</a>
                        </router-link>
                        <router-link
                            :to="{ name: 'tutorials' }"
                            v-slot="{ href, route, navigate, isActive, isExactActive }"
                            >
                            <a class="dropdown-item" :href="href" @click="navigate">Call for tutorials and workshops</a>
                        </router-link>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Program
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link
                            :to="{ name: 'program' }"
                            v-slot="{ href, route, navigate, isActive, isExactActive }"
                            >
                            <a class="dropdown-item" :href="href" @click="navigate">Main conference program</a>
                        </router-link>
                        <router-link
                            :to="{ name: 'proceedings' }"
                            v-slot="{ href, route, navigate, isActive, isExactActive }"
                            >
                            <a class="dropdown-item" :href="href" @click="navigate">Proceedings</a>
                        </router-link>
                        <router-link
                            :to="{ name: 'keynotes' }"
                            v-slot="{ href, route, navigate, isActive, isExactActive }"
                            >
                            <a class="dropdown-item" :href="href" @click="navigate">Keynotes</a>
                        </router-link>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" 
                        href="#" 
                        id="navbarDropdown" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                        Organization
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link
                            :to="{ name: 'committee' }"
                            v-slot="{ href, route, navigate, isActive, isExactActive }"
                            >
                            <a class="dropdown-item" :href="href" @click="navigate">Organizing Committee</a>
                        </router-link>
                    </div>
                </li>
            </ul>
            <div class="navbar-text">
                <button class="btn btn-primary">Registration</button>
            </div>
        </div>
    </nav>
</template>

<script>
import $ from 'jquery'
export default {
    name: 'Menu',
    mounted() {
        $('.navbar-nav .nav-item, .navbar-nav .dropdown-item')
            .not('.dropdown')
            .on('click', function(){
                $('.navbar-collapse').collapse('hide');
            });
    }
}
</script>