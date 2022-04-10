<template>
    <div class="row position-set">
        <div class="col-lg-3 col-md-6">
            <div id="datatable_wrapper">
            </div>
        </div>

        <div class="col-lg-3 col-md-6 inc-index">
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group" style="float: right;">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio0" v-on:click="$parent.setStatus('all')" autocomplete="off" checked>
                <label class="btn btn-outline-primary custom-btn" for="btnradio0">All</label>

                <input type="radio" class="btn-check" name="btnradio" v-on:click="$parent.setStatus('active')" id="btnradio1"
                       autocomplete="off">
                <label class="btn btn-outline-primary custom-btn" for="btnradio1">Active</label>
            </div>
        </div>

        <div class="col-lg-3 col-md-6 res-date-field dt-col inc-index">
        </div>

        <div class="col-lg-3 col-md-6 res-create-btn d-flex justify-content-end inc-index">
            <button type="button" class="btn btn-primary create-btn" data-bs-toggle="button" autocomplete="off"
                    v-on:click="$parent.showCreateDialog()">
                <AddIcon/>
                <span class="ms-2">Create new member</span></button>
        </div>

    </div>
</template>

<script>
    import AddIcon from "../../icons/add.vue";

    export default {
        name: "MembersTableBar",
        components: {
            AddIcon,
        },
        data: function () {
            return {
                show: false,
                currentUrl: window.location.pathname,
            }
        },
        mounted() {
        }
    }


</script>
