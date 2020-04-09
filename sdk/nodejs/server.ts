// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

import {Action, CPU, Description, Hostname, Location, OS, PrivateIPAddress, Public, PublicIPAddress, RAM, SSHKey, Status, Storage, Type} from "./index";

export class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServerState, opts?: pulumi.CustomResourceOptions): Server {
        return new Server(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pnap:index/server:Server';

    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Server {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Server.__pulumiType;
    }

    public readonly action!: pulumi.Output<Action | undefined>;
    public /*out*/ readonly cpu!: pulumi.Output<CPU>;
    public readonly description!: pulumi.Output<Description | undefined>;
    public readonly hostname!: pulumi.Output<Hostname>;
    public readonly location!: pulumi.Output<Location>;
    public readonly os!: pulumi.Output<OS>;
    public /*out*/ readonly privateIpAddresses!: pulumi.Output<PrivateIPAddress[]>;
    public readonly public!: pulumi.Output<Public>;
    public /*out*/ readonly publicIpAddresses!: pulumi.Output<PublicIPAddress[]>;
    public /*out*/ readonly ram!: pulumi.Output<RAM>;
    public readonly sshKeys!: pulumi.Output<SSHKey[]>;
    public /*out*/ readonly status!: pulumi.Output<Status>;
    public /*out*/ readonly storage!: pulumi.Output<Storage>;
    public readonly type!: pulumi.Output<Type>;

    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServerArgs | ServerState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state = argsOrState as ServerState | undefined;
            inputs["action"] = state ? state.action : undefined;
            inputs["cpu"] = state ? state.cpu : undefined;
            inputs["description"] = state ? state.description : undefined;
            inputs["hostname"] = state ? state.hostname : undefined;
            inputs["location"] = state ? state.location : undefined;
            inputs["os"] = state ? state.os : undefined;
            inputs["privateIpAddresses"] = state ? state.privateIpAddresses : undefined;
            inputs["public"] = state ? state.public : undefined;
            inputs["publicIpAddresses"] = state ? state.publicIpAddresses : undefined;
            inputs["ram"] = state ? state.ram : undefined;
            inputs["sshKeys"] = state ? state.sshKeys : undefined;
            inputs["status"] = state ? state.status : undefined;
            inputs["storage"] = state ? state.storage : undefined;
            inputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as ServerArgs | undefined;
            if (!args || args.hostname === undefined) {
                throw new Error("Missing required property 'hostname'");
            }
            if (!args || args.location === undefined) {
                throw new Error("Missing required property 'location'");
            }
            if (!args || args.os === undefined) {
                throw new Error("Missing required property 'os'");
            }
            if (!args || args.public === undefined) {
                throw new Error("Missing required property 'public'");
            }
            if (!args || args.sshKeys === undefined) {
                throw new Error("Missing required property 'sshKeys'");
            }
            if (!args || args.type === undefined) {
                throw new Error("Missing required property 'type'");
            }
            inputs["action"] = args ? args.action : undefined;
            inputs["description"] = args ? args.description : undefined;
            inputs["hostname"] = args ? args.hostname : undefined;
            inputs["location"] = args ? args.location : undefined;
            inputs["os"] = args ? args.os : undefined;
            inputs["public"] = args ? args.public : undefined;
            inputs["sshKeys"] = args ? args.sshKeys : undefined;
            inputs["type"] = args ? args.type : undefined;
            inputs["cpu"] = undefined /*out*/;
            inputs["privateIpAddresses"] = undefined /*out*/;
            inputs["publicIpAddresses"] = undefined /*out*/;
            inputs["ram"] = undefined /*out*/;
            inputs["status"] = undefined /*out*/;
            inputs["storage"] = undefined /*out*/;
        }
        if (!opts) {
            opts = {}
        }

        if (!opts.version) {
            opts.version = utilities.getVersion();
        }
        super(Server.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering Server resources.
 */
export interface ServerState {
    readonly action?: pulumi.Input<Action>;
    readonly cpu?: pulumi.Input<CPU>;
    readonly description?: pulumi.Input<Description>;
    readonly hostname?: pulumi.Input<Hostname>;
    readonly location?: pulumi.Input<Location>;
    readonly os?: pulumi.Input<OS>;
    readonly privateIpAddresses?: pulumi.Input<pulumi.Input<PrivateIPAddress>[]>;
    readonly public?: pulumi.Input<Public>;
    readonly publicIpAddresses?: pulumi.Input<pulumi.Input<PublicIPAddress>[]>;
    readonly ram?: pulumi.Input<RAM>;
    readonly sshKeys?: pulumi.Input<pulumi.Input<SSHKey>[]>;
    readonly status?: pulumi.Input<Status>;
    readonly storage?: pulumi.Input<Storage>;
    readonly type?: pulumi.Input<Type>;
}

/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    readonly action?: pulumi.Input<Action>;
    readonly description?: pulumi.Input<Description>;
    readonly hostname: pulumi.Input<Hostname>;
    readonly location: pulumi.Input<Location>;
    readonly os: pulumi.Input<OS>;
    readonly public: pulumi.Input<Public>;
    readonly sshKeys: pulumi.Input<pulumi.Input<SSHKey>[]>;
    readonly type: pulumi.Input<Type>;
}